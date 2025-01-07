/*堀
nxt-rvt-tag:15
######################################################################
File: "actions.ts".
On nepi40 : (*home-common="/cygdrive/g/home2/"):
(concat *home-common 
  "neon_postgres_241226/011/nextjs-dashboard/app/lib/"
  "actions.ts")
By Horita.
On (2025 Jan 6).
######################################################################
*/
'use server';
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
import { z } from 'zod';//New2
import { sql } from '@vercel/postgres';//New
import { revalidatePath } from 'next/cache';//New4
import { redirect } from 'next/navigation';//New5
//
import { signIn } from '@/auth';//New11
import { AuthError } from 'next-auth';//New11
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
const FormSchema = z.object(
  {
    id: z.string(),
    customerId: z.string(
      {
        invalid_type_error: 'Please select a customer.',
      }
    ),
    amount: z.coerce
      .number()
      .gt(0, {message: 'Please enter an amount greater than $0.'}),
    status: z.enum(['pending', 'paid'],
                   {
                     invalid_type_error: 'Please select an invoice status.',
                   }
                  ),
    date: z.string(),
  }
);
//**********************************************************************
const CreateInvoice = FormSchema.omit({ id: true, date: true });//New2
//**********************************************************************
export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};//New10.
//**********************************************************************
export async function createInvoice(prevState: State, formData: FormData){//<1
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  //v Test it out:
  console.log('-- createInvoice()#1:rawFormData=\n', rawFormData);
  //v Validate form fields using Zod.
  const validatedFields = CreateInvoice.safeParse(rawFormData);//New10
  console.log('-- createInvoice()#2:validatedFields=\n', validatedFields);//New10
  if( !validatedFields.success ){//<2
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields. Failed to create invoice.',
    };
  }//2>. New10
  //v Prepare data for insertion into the database.
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
  try{//<2. New6
    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
  }//2>
  catch(err){//<2
    console.log('-- createInvoice()#2:err=\n', err);//New6
    return {
      message: 'Database err: failed to create invoice.'
    };
  }//2>
  revalidatePath('/dashboard/invoices');//New4
  redirect('/dashboard/invoices');//New5
}//1>
//**********************************************************************
//v Use Zod to update the expected types.
const UpdateInvoice = FormSchema.omit({ id: true, date: true });//New3
//**********************************************************************
//**********************************************************************
export async function updateInvoice(id: string, formData: FormData){
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  const { customerId, amount, status } = UpdateInvoice.parse(rawFormData);//New3
  const amountInCents = amount * 100;
  try{//New7
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  }
  catch(err){
    console.log('-- updateInvoice()#1:err=\n', err);
    return {
      message: 'Database err: failed to update invoice.'
    };
  }
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
//**********************************************************************
export async function updateInvoice1(formData: FormData){//New13
  const id = String(formData.get('id'));//New14
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  const { customerId, amount, status } = UpdateInvoice.parse(rawFormData);//New3
  const amountInCents = amount * 100;
  try{//New7
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  }
  catch(err){
    console.log('-- updateInvoice1()#1:err=\n', err);
    return {
      message: 'Database err: failed to update invoice.'
    };
  }
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
//**********************************************************************
//**********************************************************************
export async function deleteInvoice(id: string){
  try{//New8
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return {mssage: 'Deleted invoice.'};
  }
  catch(err){
    console.log('-- deleteInvoice()#1:err=\n', err);
    return {message: 'Databse err: failed to delete invoice.'};
  }
}
//**********************************************************************
export async function deleteInvoice1(formData: FormData){//New12
  const id = String(formData.get('id'));//New14
  //const id = formData.get('id');//New12
  try{//New8
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return {mssage: 'Deleted invoice.'};
  }
  catch(err){
    console.log('-- deleteInvoice()#1:err=\n', err);
    return {message: 'Databse err: failed to delete invoice.'};
  }
}
//**********************************************************************
//**********************************************************************
//v New11
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
){
  try{
    await signIn('credentials', formData);
  } 
  catch(error){
    if( error instanceof AuthError ){
      switch(error.type){
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
