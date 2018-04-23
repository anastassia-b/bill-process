Analytics = Segment::Analytics.new({
    write_key: Figaro.env.segment_api_key,
    on_error: Proc.new { |status, msg| print msg }
})