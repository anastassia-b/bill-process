class Api::BillsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update]
  before_action :require_finance_user, only: [:create]

  def index
    @bills = Bill.all
  end

  def show
    @bill = Bill.find_by(id: params[:id])
  end

  def create
    @bill = Bill.new(bill_params)
    @bill.status = "DRAFT"

    if @bill.save
      # Log the bill action whenever the bill changes.
      @bill_action = BillAction.new(
        bill_id: @bill.id,
        stakeholder_id: params[:bill][:stakeholder_id],
        comment: params[:bill][:comment],
        action: "DRAFT"
      )

      if @bill_action.save
        render 'api/bills/show'
      else
        Bill.last.destroy
      end

    else
      render json: @bill.errors.full_messages, status: 422
    end
  end

  def update
    # find the bill from the params.
    # update the status
    # create the bill action

  end

  private
  def bill_params
    params.require(:bill).permit(
      :customer_id, :month, :year, :overage_units, :overage_unit_cost, :overage_amount
    )
  end
end
