class Api::CustomersController < ApplicationController
  def index
    @customers = Customer.all
  end

  def show
    @customer = Customer.find(params[:id])
    #need error handling
  end

  # Could add create/edit/destroy customer functionality
end
