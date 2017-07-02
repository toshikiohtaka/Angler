class Log < ApplicationRecord

  validates :name, presence: true
  validates :image, presence: true

  belongs_to :user
  has_one :location

  mount_uploader :image, ImageUploader
end
