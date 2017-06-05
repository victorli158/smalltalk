# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :capy do
    name { Faker::Name }
    color { Faker::Color.hex_color }

    factory :green_capy do
      color 'green'
    end
  end
end
