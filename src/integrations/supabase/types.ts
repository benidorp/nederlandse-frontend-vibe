export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      ai_generated_content: {
        Row: {
          content: string | null
          content_type: string
          created_at: string
          id: string
          job_id: string | null
          language: string | null
          metadata: Json | null
          title: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          content?: string | null
          content_type: string
          created_at?: string
          id?: string
          job_id?: string | null
          language?: string | null
          metadata?: Json | null
          title?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          content?: string | null
          content_type?: string
          created_at?: string
          id?: string
          job_id?: string | null
          language?: string | null
          metadata?: Json | null
          title?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_generated_content_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "ai_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_generated_pages: {
        Row: {
          created_at: string
          domain: string | null
          html_content: string
          id: string
          language: string
          meta_description: string | null
          meta_title: string | null
          metadata: Json | null
          niche: string | null
          slug: string
          source_page_id: string | null
          status: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          domain?: string | null
          html_content: string
          id?: string
          language?: string
          meta_description?: string | null
          meta_title?: string | null
          metadata?: Json | null
          niche?: string | null
          slug: string
          source_page_id?: string | null
          status?: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          domain?: string | null
          html_content?: string
          id?: string
          language?: string
          meta_description?: string | null
          meta_title?: string | null
          metadata?: Json | null
          niche?: string | null
          slug?: string
          source_page_id?: string | null
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      ai_jobs: {
        Row: {
          completed_at: string | null
          cost_usd: number | null
          created_at: string
          error_message: string | null
          id: string
          input_data: Json
          job_type: string
          model: string
          output_data: Json | null
          provider: string | null
          status: string
          tokens_used: number | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          cost_usd?: number | null
          created_at?: string
          error_message?: string | null
          id?: string
          input_data?: Json
          job_type: string
          model?: string
          output_data?: Json | null
          provider?: string | null
          status?: string
          tokens_used?: number | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          cost_usd?: number | null
          created_at?: string
          error_message?: string | null
          id?: string
          input_data?: Json
          job_type?: string
          model?: string
          output_data?: Json | null
          provider?: string | null
          status?: string
          tokens_used?: number | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      ai_settings: {
        Row: {
          id: string
          setting_key: string
          setting_value: Json
          updated_at: string
        }
        Insert: {
          id?: string
          setting_key: string
          setting_value?: Json
          updated_at?: string
        }
        Update: {
          id?: string
          setting_key?: string
          setting_value?: Json
          updated_at?: string
        }
        Relationships: []
      }
      ai_usage_logs: {
        Row: {
          completion_tokens: number
          cost_usd: number
          created_at: string
          id: string
          job_id: string | null
          model: string
          prompt_tokens: number
          provider: string | null
          total_tokens: number
          user_id: string | null
        }
        Insert: {
          completion_tokens?: number
          cost_usd?: number
          created_at?: string
          id?: string
          job_id?: string | null
          model: string
          prompt_tokens?: number
          provider?: string | null
          total_tokens?: number
          user_id?: string | null
        }
        Update: {
          completion_tokens?: number
          cost_usd?: number
          created_at?: string
          id?: string
          job_id?: string | null
          model?: string
          prompt_tokens?: number
          provider?: string | null
          total_tokens?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_usage_logs_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "ai_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_submissions: {
        Row: {
          created_at: string
          domain: string | null
          email: string
          email_error: string | null
          email_sent: boolean
          id: string
          message: string | null
          name: string
          recipient_email: string
          source_page: string | null
        }
        Insert: {
          created_at?: string
          domain?: string | null
          email: string
          email_error?: string | null
          email_sent?: boolean
          id?: string
          message?: string | null
          name: string
          recipient_email?: string
          source_page?: string | null
        }
        Update: {
          created_at?: string
          domain?: string | null
          email?: string
          email_error?: string | null
          email_sent?: boolean
          id?: string
          message?: string | null
          name?: string
          recipient_email?: string
          source_page?: string | null
        }
        Relationships: []
      }
      email_send_log: {
        Row: {
          created_at: string
          error_message: string | null
          id: string
          message_id: string | null
          metadata: Json | null
          recipient_email: string
          status: string
          template_name: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          recipient_email: string
          status: string
          template_name: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          recipient_email?: string
          status?: string
          template_name?: string
        }
        Relationships: []
      }
      email_send_state: {
        Row: {
          auth_email_ttl_minutes: number
          batch_size: number
          id: number
          retry_after_until: string | null
          send_delay_ms: number
          transactional_email_ttl_minutes: number
          updated_at: string
        }
        Insert: {
          auth_email_ttl_minutes?: number
          batch_size?: number
          id?: number
          retry_after_until?: string | null
          send_delay_ms?: number
          transactional_email_ttl_minutes?: number
          updated_at?: string
        }
        Update: {
          auth_email_ttl_minutes?: number
          batch_size?: number
          id?: number
          retry_after_until?: string | null
          send_delay_ms?: number
          transactional_email_ttl_minutes?: number
          updated_at?: string
        }
        Relationships: []
      }
      email_unsubscribe_tokens: {
        Row: {
          created_at: string
          email: string
          id: string
          token: string
          used_at: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          token: string
          used_at?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          token?: string
          used_at?: string | null
        }
        Relationships: []
      }
      gsc_inspection_results: {
        Row: {
          coverage_state: string | null
          created_at: string
          error: string | null
          google_canonical: string | null
          indexing_state: string | null
          inspect_count: number
          inspection_result_link: string | null
          last_crawl_time: string | null
          last_inspected_at: string
          page_fetch_state: string | null
          robots_txt_state: string | null
          site_url: string
          url: string
          user_canonical: string | null
          verdict: string | null
        }
        Insert: {
          coverage_state?: string | null
          created_at?: string
          error?: string | null
          google_canonical?: string | null
          indexing_state?: string | null
          inspect_count?: number
          inspection_result_link?: string | null
          last_crawl_time?: string | null
          last_inspected_at?: string
          page_fetch_state?: string | null
          robots_txt_state?: string | null
          site_url: string
          url: string
          user_canonical?: string | null
          verdict?: string | null
        }
        Update: {
          coverage_state?: string | null
          created_at?: string
          error?: string | null
          google_canonical?: string | null
          indexing_state?: string | null
          inspect_count?: number
          inspection_result_link?: string | null
          last_crawl_time?: string | null
          last_inspected_at?: string
          page_fetch_state?: string | null
          robots_txt_state?: string | null
          site_url?: string
          url?: string
          user_canonical?: string | null
          verdict?: string | null
        }
        Relationships: []
      }
      suppressed_emails: {
        Row: {
          created_at: string
          email: string
          id: string
          metadata: Json | null
          reason: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          metadata?: Json | null
          reason: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          metadata?: Json | null
          reason?: string
        }
        Relationships: []
      }
      user_ai_keys: {
        Row: {
          api_key_hash: string
          created_at: string
          encrypted_api_key: string
          id: string
          is_active: boolean
          key_label: string | null
          provider: string
          updated_at: string
          user_id: string
        }
        Insert: {
          api_key_hash: string
          created_at?: string
          encrypted_api_key: string
          id?: string
          is_active?: boolean
          key_label?: string | null
          provider: string
          updated_at?: string
          user_id: string
        }
        Update: {
          api_key_hash?: string
          created_at?: string
          encrypted_api_key?: string
          id?: string
          is_active?: boolean
          key_label?: string | null
          provider?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_ai_preferences: {
        Row: {
          auto_approve: boolean
          created_at: string
          default_provider: string
          fallback_enabled: boolean
          id: string
          low_cost_mode: boolean
          manual_approval: boolean
          suggest_only: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          auto_approve?: boolean
          created_at?: string
          default_provider?: string
          fallback_enabled?: boolean
          id?: string
          low_cost_mode?: boolean
          manual_approval?: boolean
          suggest_only?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          auto_approve?: boolean
          created_at?: string
          default_provider?: string
          fallback_enabled?: boolean
          id?: string
          low_cost_mode?: boolean
          manual_approval?: boolean
          suggest_only?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      vertical_language_routes: {
        Row: {
          created_at: string
          id: string
          lang_code: string
          lang_name: string
          path: string
          vertical: string
        }
        Insert: {
          created_at?: string
          id?: string
          lang_code: string
          lang_name: string
          path: string
          vertical: string
        }
        Update: {
          created_at?: string
          id?: string
          lang_code?: string
          lang_name?: string
          path?: string
          vertical?: string
        }
        Relationships: []
      }
    }
    Views: {
      published_pages_public: {
        Row: {
          created_at: string | null
          domain: string | null
          html_content: string | null
          id: string | null
          language: string | null
          meta_description: string | null
          meta_title: string | null
          metadata: Json | null
          niche: string | null
          slug: string | null
          status: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          domain?: string | null
          html_content?: string | null
          id?: string | null
          language?: string | null
          meta_description?: string | null
          meta_title?: string | null
          metadata?: Json | null
          niche?: string | null
          slug?: string | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          domain?: string | null
          html_content?: string | null
          id?: string | null
          language?: string | null
          meta_description?: string | null
          meta_title?: string | null
          metadata?: Json | null
          niche?: string | null
          slug?: string | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      delete_email: {
        Args: { message_id: number; queue_name: string }
        Returns: boolean
      }
      enqueue_email: {
        Args: { payload: Json; queue_name: string }
        Returns: number
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      move_to_dlq: {
        Args: {
          dlq_name: string
          message_id: number
          payload: Json
          source_queue: string
        }
        Returns: number
      }
      read_email_batch: {
        Args: { batch_size: number; queue_name: string; vt: number }
        Returns: {
          message: Json
          msg_id: number
          read_ct: number
        }[]
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
