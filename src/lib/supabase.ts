
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    // We'll throw an error if the user hasn't set up the variables yet
    console.error("Missing Supabase environment variables! Check your .env file.")
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')
