package controllers

import play.api.mvc._

class Application extends Controller {

  def index = Action {
    Ok(views.html.index("wallex->Dashboard"))
  }

  def funds = Action {
    Ok(views.html.funds("wallex->MyFunds"))
  }

  def trade = Action {
    Ok(views.html.trade("wallex->Trading"))
  }

  def ifttt = Action {
    Ok(views.html.ifttt("wallex->Coding"))
  }

  def login = Action {
    Ok(views.html.login("Login"))
  }

  def schedule = Action {
    Ok(views.html.schedule("Schedule"))
  }
}