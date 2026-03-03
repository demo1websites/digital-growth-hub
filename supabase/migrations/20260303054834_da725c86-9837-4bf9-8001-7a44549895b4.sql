
-- Create a public bucket for service videos
INSERT INTO storage.buckets (id, name, public)
VALUES ('service-videos', 'service-videos', true);

-- Allow anyone to view videos
CREATE POLICY "Service videos are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'service-videos');

-- Allow authenticated users to upload videos
CREATE POLICY "Authenticated users can upload service videos"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'service-videos');

-- Allow authenticated users to update their videos
CREATE POLICY "Authenticated users can update service videos"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'service-videos');

-- Allow authenticated users to delete their videos
CREATE POLICY "Authenticated users can delete service videos"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'service-videos');
