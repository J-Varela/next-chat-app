export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      messages: {
        Row: {
          created_at: string;
          id: string;
          is_edit: boolean;
          send_by: string;
          text: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          is_edit?: boolean;
          send_by?: string;
          text: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          is_edit?: boolean;
          send_by?: string;
          text?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'messages_send_by_fkey';
            columns: ['send_by'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      users: {
        Row: {
          avatar_url: string;
          created_at: string;
          display_name: string;
          id: string;
        };
        Insert: {
          avatar_url: string;
          created_at?: string;
          display_name: string;
          id: string;
        };
        Update: {
          avatar_url?: string;
          created_at?: string;
          display_name?: string;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'users_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
