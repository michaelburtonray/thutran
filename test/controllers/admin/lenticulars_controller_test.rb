require 'test_helper'

class Admin::LenticularsControllerTest < ActionController::TestCase
  setup do
    @lenticular = lenticulars(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:lenticulars)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create lenticular" do
    assert_difference('Lenticular.count') do
      post :create, lenticular: { anchor_hyperlink_reference: @lenticular.anchor_hyperlink_reference }
    end

    assert_redirected_to admin_lenticular_path(assigns(:lenticular))
  end

  test "should show lenticular" do
    get :show, id: @lenticular
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @lenticular
    assert_response :success
  end

  test "should update lenticular" do
    patch :update, id: @lenticular, lenticular: { anchor_hyperlink_reference: @lenticular.anchor_hyperlink_reference }
    assert_redirected_to admin_lenticular_path(assigns(:lenticular))
  end

  test "should destroy lenticular" do
    assert_difference('Lenticular.count', -1) do
      delete :destroy, id: @lenticular
    end

    assert_redirected_to admin_lenticulars_path
  end
end
