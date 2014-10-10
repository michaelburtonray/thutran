class Lenticular < ActiveRecord::Base

  has_attached_file :lense
  validates_attachment_content_type :lense, :content_type => /\Aimage\/.*\Z/

  has_attached_file :image
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/


  before_save :extract_image_dimensions
  serialize :image_dimensions

  before_save :extract_lense_dimensions
  serialize :lense_dimensions



  # Retrieves dimensions for image assets
  # @note Do this after resize operations to account for auto-orientation.
  def extract_image_dimensions
    tempfile = image.queued_for_write[:original]
    unless tempfile.nil?
      geometry = Paperclip::Geometry.from_file(tempfile)
      self.image_dimensions = [geometry.width.to_i, geometry.height.to_i]
    end
  end

  # Retrieves dimensions for image assets
  # @note Do this after resize operations to account for auto-orientation.
  def extract_lense_dimensions
    tempfile = lense.queued_for_write[:original]
    unless tempfile.nil?
      geometry = Paperclip::Geometry.from_file(tempfile)
      self.lense_dimensions = [geometry.width.to_i, geometry.height.to_i]
    end
  end


end
