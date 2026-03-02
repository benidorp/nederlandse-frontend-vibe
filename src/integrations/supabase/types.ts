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
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
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
    Enums: {},
  },
} as const
