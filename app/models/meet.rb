# frozen_string_literal: true

class Meet < ApplicationRecord
  MEET_DOMAIN = "meet.akshaybirajdar.com"

  validates :room, presence: true
  validates :room, uniqueness: true
end
