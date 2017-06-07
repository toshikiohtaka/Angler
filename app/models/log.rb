class Log < ApplicationRecord

  validates :name, presence: true

  belongs_to :user
  # 後でmapとのアソシエージョン組む
  # belongs_to :map

  mount_uploader :image, ImageUploader
end
