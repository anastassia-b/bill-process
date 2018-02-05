class Api::BillsController < ApplicationController
  def index
    @bills = Bill.all
  end

  def show
    @bill = Bill.find_by(id: params[:id])
    @bill_actions = @bill.bill_actions
  end

  def create
    #validations need to go here
  end
end
