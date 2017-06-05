require 'spec_helper'

RSpec.describe UsersController, :type => :controller do
  describe "POST #create" do
    context "with invalid params" do
      it "validates the presence of the user's email and password" do
        post :create, user: {email: "jack_bruce@place.com", password: ""}
        expect(response).to render_template("new")
        expect(flash[:errors]).to be_present
      end

      it "validates that the password is at least 6 characters long" do
        post :create, user: {email: "jack_bruce@place.com", password: "short"}
        expect(response).to render_template("new")
        expect(flash[:errors]).to be_present
      end
    end

    context "with valid params" do
      it "redirects user to sign-in page on success" do
        post :create, user: {email: "jack_bruce@place.com", password: "password"}
        expect(response).to redirect_to(new_session_url)
      end
    end
  end

  describe "GET #index" do
    it 'renders the users index' do
      get :index
      expect(response).to be_success
      expect(response).to render_template(:index)
    end
  end

  describe "GET #show" do
    it 'renders the show template' do
      User.create!(name: 'John', age: 1234, sweg_level: ">9000")
      get :show, id: 1
      expect(response).to be_success
      exepect(response).to render_template(:show)
    end

  end

end
