class Log < ApplicationRecord

  validates :name, presence: true

  belongs_to :user

  mount_uploader :image, ImageUploader
end
