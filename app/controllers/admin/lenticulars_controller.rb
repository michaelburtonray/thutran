class Admin::LenticularsController < Admin::ApplicationController
  before_action :set_lenticular, only: [:show, :edit, :update, :destroy]

  # GET /admin/lenticulars
  # GET /admin/lenticulars.json
  def index
    @lenticulars = Lenticular.all
  end

  # GET /admin/lenticulars/1
  # GET /admin/lenticulars/1.json
  def show
  end

  # GET /admin/lenticulars/new
  def new
    @lenticular = Lenticular.new
  end

  # GET /admin/lenticulars/1/edit
  def edit
  end

  # POST /admin/lenticulars
  # POST /admin/lenticulars.json
  def create
    @lenticular = Lenticular.new(lenticular_params)

    respond_to do |format|
      if @lenticular.save
        format.html { redirect_to [:admin, @lenticular], notice: 'Lenticular was successfully created.' }
        format.json { render action: 'show', status: :created, location: @lenticular }
      else
        format.html { render action: 'new' }
        format.json { render json: @lenticular.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /admin/lenticulars/1
  # PATCH/PUT /admin/lenticulars/1.json
  def update
    respond_to do |format|
      if @lenticular.update(lenticular_params)
        format.html { redirect_to [:admin, @lenticular], notice: 'Lenticular was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @lenticular.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admin/lenticulars/1
  # DELETE /admin/lenticulars/1.json
  def destroy
    @lenticular.destroy
    respond_to do |format|
      format.html { redirect_to admin_lenticulars_url, notice: 'Lenticular was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lenticular
      @lenticular = Lenticular.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def lenticular_params
      params.require(:lenticular).permit(:anchor_hyperlink_reference, :lense, :image)
    end
end
