class Api::UsagesController < ApplicationController
  def index
    @customer = Customer.find_by(id: params[:customer_id])
    @usage = @customer.usage
  end
end
