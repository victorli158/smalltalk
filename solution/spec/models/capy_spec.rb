#When testing models we want to test
# 1 validations
# 2 associations
# 3 class methods

RSpec.describe Capy, type: :model do
  subject(:capy) { FactoryGirl.build(:capy) }

  describe 'validations' do
    it { should validate_presence_of(:name)}
    it { should validate_presence_of(:color)}
    it { should validate_presence_of(:name)}
    it { should validate_presence_of(:swag_level)}

    it 'should validate that the color is not green' do
      green_capy = FactoryGirl.build(:green_capy)
      green_capy.valid?
      expect(green_capy.errors[:color]).to eq(['cannot be green!!'])
    end
  end

  describe 'associations' do
    it { should have_many(:parties) }
    it { should have_many(:friends) }
    it { should have_one(:tail_color)}
    it { should have_many(:restaurants).through(:restaurant_ownerships) }
  end

  let(:party) { FactoryGirl.build(:party) }
  describe 'class methods' do
    describe '::capys_of_the_rainbow' do
      it 'should return all capys of color rainbow' do
        expect(Capy.capys_of_the_rainbow.where_values_hash).to eq({'color' => 'rainbow'})
      end
    end
  end

end
