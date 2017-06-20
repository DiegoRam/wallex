package controllers

import play.api.mvc._

class Application extends Controller {

  def index = Action {
    Ok(views.html.index("wallix->Dashboard"))
  }

  def funds = Action {
    Ok(views.html.funds("wallix->MyFunds"))
  }

  def trade = Action {
    Ok(views.html.trade("wallix->Trading"))
  }

  def ifttt = Action {
    Ok(views.html.ifttt("wallix->Coding"))
  }

  def login = Action {
    Ok(views.html.login("Login"))
  }

  def schedule = Action {
    Ok(views.html.schedule("Schedule"))
  }

  def send = Action {
    Ok(views.html.send("wallix -> Send"))
  }

  def send2address = Action {
    Ok(views.html.send2address("wallix->send2address"))
  }

  def send2Service = Action {
    Ok(views.html.send2Service("wallix->send2Service"))
  }

  def recommend = TODO
  def settings = TODO
}