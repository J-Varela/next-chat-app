import React, { useRef, useState } from 'react';
import { useMessage } from '@/lib/store/messages';
import { supabaseBrowser } from '@/lib/supabase/browser';

export default function ListMessages() {
  const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [userScrolled, setUserScrolled] = useState(false);
  const [notification, setNotification] = useState(0);

  const {
    messages,
    addMessage,
    optimisticIds,
    optimisticDeleteMessage,
    optimisticUpdateMessage,
  } = useMessage((state) => state);

  const supabase = supabaseBrowser();

  return <div></div>;
}
