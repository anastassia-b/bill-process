class Api::BillsController < ApplicationController
  def index
    @bills = Bill.all
  end

  def show
    @bill = Bill.find_by(id: params[:id])
  end

  def create
    # calculations of the bills amount could be done/validated on the backend or front
    # validations need to go here, that its account role is finance

    @bill = Bill.new(bill_params)
    @bill.status = "DRAFT"

    if @bill.save
      # use params[:stakeholder_id]
      # also create Bill Action in addition to creating a bill
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

  private
  # whitelist params
  def bill_params
    params.require(:bill).permit(
      :customer_id, :month, :year, :overage_units, :overage_unit_cost, :overage_amount
    )
  end
end
