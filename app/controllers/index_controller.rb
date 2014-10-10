class IndexController < ApplicationController
  def index
    @lenticulars = Lenticular.where('position > 0').all
    @background = Lenticular.where('position = 0').first
  end

end
