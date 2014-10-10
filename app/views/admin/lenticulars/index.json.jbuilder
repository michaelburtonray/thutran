json.array!(@lenticulars) do |lenticular|
  json.extract! lenticular, :anchor_hyperlink_reference
  json.url lenticular_url(lenticular, format: :json)
end