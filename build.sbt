import Dependencies.{`commons-libs`, `test-libs`}
name := "walle-ex"

version := "1.0"

lazy val `wallex` = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq( jdbc , cache , ws , specs2 % Test) ++ `commons-libs` ++ `test-libs`

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )  

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"  