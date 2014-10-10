Paperclip::Attachment.default_options[:storage] = :s3
Paperclip::Attachment.default_options[:url] = 's3_domain_url'
Paperclip::Attachment.default_options[:path] = '/:class/:attachment/:id_partition/:style/:filename'
# Paperclip::Attachment.default_options[:styles] = { :large => '2560x1440' }
Paperclip::Attachment.default_options[:convert_options] = { :thumb => '-quality 75 -strip', :content => '-quality 75 -strip -interlace Plane'}