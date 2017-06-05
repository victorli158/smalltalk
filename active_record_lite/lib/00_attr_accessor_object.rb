class AttrAccessorObject
  def self.my_attr_accessor(*names)
    # ...
    names.each do |name|
      define_method(name) do
        instance_variable_get("@#{name}")
      end

      define_method("#{name}=") do |val|
        instance_variable_set("@#{name}", val)
      end
    end
  end
end

# attr_accessor :name, :weight
# def initialize(name, weight)
#   @name = name
#   @weight = weight
# end
#
# def name
#   @name
# end
#
# def name=(name)
#   @name = name
# end
