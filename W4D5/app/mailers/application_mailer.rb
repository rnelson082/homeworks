class ApplicationMailer < ActionMailer::Base
  default from: 'ninetyninecatsadmin@example.com'
  layout 'mailer'
  #deliver = deliver_now

  def welcome_email(user)
    @user = user

    mail(to: @user.username, subject: "Welcome to 99 cats!")


    

  end
end
