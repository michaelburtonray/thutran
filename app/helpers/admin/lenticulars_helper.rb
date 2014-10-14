module Admin::LenticularsHelper

  def background_id
    Configurations.find_by(name: 'background').value
  end

  def lense_id
    Configurations.find_by(name: 'lense').value
  end

end
