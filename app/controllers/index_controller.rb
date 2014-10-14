class IndexController < ApplicationController
  def index

    if(Lenticular.count > 0)

      background_id = Configurations.find_by(name: 'background').value
      lense_id = Configurations.find_by(name: 'lense').value

      @background = Lenticular.find(background_id)
      @lense = Lenticular.find(lense_id)

      @lenticulars = Lenticular.where("id != ?", background_id).where("id != ?", lense_id).all

    else

      render nothing: true

    end

  end

end
