//
//  ========================================================================
//  Copyright (c) 1995-2017 Mort Bay Consulting Pty. Ltd.
//  ------------------------------------------------------------------------
//  All rights reserved. This program and the accompanying materials
//  are made available under the terms of the Eclipse Public License v1.0
//  and Apache License v2.0 which accompanies this distribution.
//
//      The Eclipse Public License is available at
//      http://www.eclipse.org/legal/epl-v10.html
//
//      The Apache License v2.0 is available at
//      http://www.opensource.org/licenses/apache2.0.php
//
//  You may elect to redistribute this code under either of these licenses.
//  ========================================================================
//

import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.DefaultHandler;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.server.handler.ResourceHandler;

public class FileServer {
	public static void main(String[] args) throws Exception {
		Server server = new Server(8080);
		
		ResourceHandler resourceHandler = new ResourceHandler();
		
		resourceHandler.setDirectoriesListed(true);
		resourceHandler.setWelcomeFiles(new String[]{"index.html"});
		resourceHandler.setResourceBase(".");
//		resourceHandler.setDirectoriesListed(true);
		
		DefaultHandler defaultHandler = new DefaultHandler();
		
		HandlerList handlers = new HandlerList();
		handlers.setHandlers(new Handler[]{resourceHandler, defaultHandler});
		server.setHandler(handlers);
		
		server.start();
		server.join();
	}
}
