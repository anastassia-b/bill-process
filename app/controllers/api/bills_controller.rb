class Api::BillsController < ApplicationController
  before_action :require_logged_in, only: [:create, :approve, :reject]
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
        stakeholder_id: current_user.id,
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

  def approve
    @bill = Bill.find_by(id: params[:id])
    @bill.status = 'FINAL'

    @bill_action = BillAction.new(
      bill_id: @bill.id,
      stakeholder_id: current_user.id,
      comment: params[:bill][:comment],
      action: "APPROVE"
    )

    if @bill.save && @bill_action.save
      render 'api/bills/show'
    else
      render json: @bill.errors.full_messages, status: 422
    end
  end


  def reject
    @bill = Bill.find_by(id: params[:id])
    @bill.status = 'WRITEOFF'

    @bill_action = BillAction.new(
      bill_id: @bill.id,
      stakeholder_id: current_user.id,
      comment: params[:bill][:comment],
      action: "REJECT"
    )

    if @bill.save && @bill_action.save
      render 'api/bills/show'
    else
      render json: @bill.errors.full_messages, status: 422
    end
  end

  private
  def bill_params
    params.require(:bill).permit(
      :customer_id, :month, :year, :overage_units, :overage_unit_cost, :overage_amount
    )
  end
end
