class Log < ApplicationRecord

  validates :name, presence: true

  belongs_to :user
  belongs_to :map

  mount_uploader :image, ImageUploader
end
