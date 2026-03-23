import { supabase } from './supabase';

/**
 * Uploads a given File object to the specified Supabase Storage bucket.
 * @param file - The File object to upload
 * @param bucket - The name of the Supabase storage bucket (e.g., 'blog-images')
 * @returns The public URL of the uploaded S3 file, or null if it failed.
 */
export const uploadFileToSupabase = async (file: File, bucket: string): Promise<string | null> => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError, data: uploadData } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      console.error('Supabase upload error:', uploadError.message);
      return null;
    }

    const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
    return data.publicUrl;
  } catch (error) {
    console.error('Unexpected error during file upload:', error);
    return null;
  }
};
