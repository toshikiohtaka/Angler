class ImageUploader < CarrierWave::Uploader::Base

  storage :fog

  include CarrierWave::ImageOptimizer

  process optimize: [{
    jpegoptim: true,
    optipng: true
  }]

  process optimize: [{ quality: 30 }]

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def extension_white_list
    ['jpg', 'jpeg', 'gif', 'png', '']
  end

end
