class Bill < ApplicationRecord
  # add validations
  belongs_to :customer

  has_many :bill_actions

  def max_one_bill_per_month()
    # find this bill's customers bills, check month and year.
  end

  def skip_first_three_months()

  end

  def require_positive_amount()

  end
end
