class Admin::IndexController < Admin::ApplicationController
  def index
    redirect_to admin_lenticulars_path
  end
end
