import React from 'react';
import { useMessage } from '@/lib/store/messages';
import { LIMIT_MESSAGE } from '@/lib/constant';
import { getFromAndTo } from '@/lib/utils';
import { supabaseBrowser } from '@/lib/supabase/browser';
import { toast } from 'sonner';
import { Button } from './ui/button';

export default function LoadMoreMessages() {
  const page = useMessage((state) => state.page);
  const setMessages = useMessage((state) => state.setMesssages);
  const hasMore = useMessage((state) => state.hasMore);

  const fetchMore = async () => {
    const { from, to } = getFromAndTo(page, LIMIT_MESSAGE);

    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from('messages')
      .select('*,users(*)')
      .range(from, to)
      .order('created_at', { ascending: false });

    if (error) {
      toast.error(error.message);
    } else {
      setMessages(data.reverse());
    }
  };

  if (hasMore) {
    return (
      <Button variant="outline" className="w-full">
        Load More
      </Button>
    );
  }

  return <div></div>;
}
