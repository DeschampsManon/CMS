class PageBuilderController < ApplicationController
  def index
  end

  def show
  end

  def change_columns_layout
  	@layout = params[:layout]
  	respond_to do |format|
      format.js 
    end
  end
end
