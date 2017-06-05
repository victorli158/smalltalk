def print_lines(file)
  File.open(file) do |f|
    f.select {|line| line.chomp.match(/this/) }
  end
end

p print_lines('words.txt')
