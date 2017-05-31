class Log < ApplicationRecord

  validates :name, presence: true

  belongs_to :user

end
