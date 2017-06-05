# def merge_sort(array)
#   return array if array.length <= 1
#
#   left_half = merge_sort(array[0...array.length/2])
#   right_half = merge_sort(array[array.length/2..-1])
#
#   merge(left_half, right_half)
#
#
#
# end
#
# def merge(left, right)
#   merged = []
#   until left.empty? || right.empty?
#     if left.first < right.first
#       merged << left.shift
#     else
#       merged << right.shift
#     end
#   end
#   merged.concat(left).concat(right)
# end


def quick_sort(array, &prc)
  prc ||= Proc.new {|num1, num2| num1 <=> num2}
  return array if array.length <= 1
  pivot = array.pop
  left_half = []
  right_half = []
  array.each do |el|
    if prc.call(el, pivot) <= 0
      left_half << el
    else
      right_half << el
    end
  end

  quick_sort(left_half).concat([pivot]).concat(quick_sort(right_half))
end

def binary_search(array, target)
  midpoint = array.length / 2
  left_half = array[0...midpoint]
  right_half = array[midpoint + 1..-1]
  return midpoint if array[midpoint] == target
  if target < array[midpoint]
    binary_search(left_half, target)
  else
    binary_search(right_half, target)
  end

end
