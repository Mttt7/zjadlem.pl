import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { toast } from 'ngx-sonner';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;
  private username: string = '';

  constructor() {
    this.supabase = createClient(
      process.env['NG_SUPABASE_URL'],
      process.env['NG_SUPABASE_ANON_KEY']
    );
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('username') || '';
  }

  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path);
  }

  async uploadImage(e: any) {
    let file = e.target.files[0];
    const fileName = `${this.username}/${uuidv4()}`;

    const { data, error } = await this.supabase.storage
      .from('images')
      .upload(fileName, file);

    if (data) {
      const { data } = this.supabase.storage
        .from('images')
        .getPublicUrl(fileName);

      if (data.publicUrl) {
        return data.publicUrl;
      } else {
        return '';
      }
    } else {
      console.error(error);
      toast.error('Nie udało się przesłać obrazu.');
      return '';
    }
  }
}
