class IndexController < ApplicationController
  def index

    client = Contentful::Client.new(
      access_token: 'a2117d1a67bcc95db009c51580d88a876db830ca7d7e5d1585b1c560de89eeaa',
      space: 'v5xlm0cl6yyi',
      api_url: 'cdn.contentful.com',
      dynamic_entries: :auto
    )

    # binding.pry

    if(Lenticular.count > 0)

      background_id = Configurations.find_by(name: 'background').value
      lense_id = Configurations.find_by(name: 'lense').value

      @background = Lenticular.find(background_id)
      @lense = Lenticular.find(lense_id)

      @lenticulars = Lenticular.where("id != ?", background_id).where("id != ?", lense_id).all

    else
      @lenticulars = Lenticular.all

      # render nothing: true

    end



  end

end
