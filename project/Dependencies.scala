import sbt._


object Dependencies {

  private [Dependencies] object Compile {
    val `cats`: ModuleID = "org.typelevel" %% "cats" % "0.9.0"
    val `bootstrap`: ModuleID = "org.webjars" % "bootstrap" % "3.3.4"
  }

  private[Dependencies] object TestDep {

    val `scala-test`: ModuleID = "org.scalatestplus.play" %% "scalatestplus-play" % "1.5.1" % Test
  }

  import Dependencies.Compile._
  import Dependencies.TestDep._

  val `commons-libs` = Seq(`cats`, `bootstrap`)
  val `test-libs` = Seq(`scala-test`)
}