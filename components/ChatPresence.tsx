'use client';

import { useUser } from '@/lib/store/user';
import { supabaseBrowser } from '@/lib/supabase/browser';
import React, { useEffect, useState } from 'react';

export default function ChatPresence() {
  const user = useUser((state) => state.user);
  const supabase = supabaseBrowser();
  const [onlineUsers, setOnlineUsers] = useState(0);

  useEffect(() => {
    const channel = supabase.channel('room1');
    channel.on('presence', { event: 'sync' }, () => {});
  });

  return (
    <div className="flex items-center gap-1">
      <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
      <h1 className="text-sm text-gray-400">{onlineUsers}online</h1>
    </div>
  );
}
