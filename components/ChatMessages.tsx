import React, { Suspense } from 'react';
import { supabaseServer } from '@/lib/supabase/server';
import { LIMIT_MESSAGE } from '@/lib/constant';
import InitMessages from '@/lib/store/InitMessages';

export default async function ChatMessages() {
  const supabase = supabaseServer();

  const { data } = await supabase
    .from('messages')
    .select('*,users(*)')
    .range(0, LIMIT_MESSAGE)
    .order('created_at', { ascending: false });

  return (
    <Suspense fallback={'loading..'}>
      <InitMessages messages={data?.reverse() || []} />
    </Suspense>
  );
}
