import Image from 'next/image';
import InitUser from '@/lib/store/InitUser';
import { Button } from '@/components/ui/button';
import ChatHeader from '@/components/ChatHeader';
import { supabaseServer } from '@/lib/supabase/server';
import ChatInput from '@/components/ChatInput';
import ChatMessages from '@/components/ChatMessages';

export default async function Page() {
  const supabase = supabaseServer();
  const { data } = await supabase.auth.getSession();

  return (
    <>
      <div className="max-w-3xl mx-auto md:py-10 h-screen">
        <div className="h-full border rounded-md flex flex-col relative">
          <ChatHeader user={data.session?.user} />
          <ChatMessages />
          <ChatInput />
        </div>
      </div>
      <InitUser user={data.session?.user} />
    </>
  );
}
