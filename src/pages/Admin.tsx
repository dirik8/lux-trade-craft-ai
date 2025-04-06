
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Home, Mail, FileText, Users, Settings, LogOut } from "lucide-react";
import AdminContacts from "@/components/admin/AdminContacts";
import AdminBlog from "@/components/admin/AdminBlog";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  return (
    <>
      <Helmet>
        <title>Admin Panel | BLKR Trading</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-blkr-black text-blkr-offWhite flex">
        {/* Admin Sidebar */}
        <div className="w-64 bg-blkr-blackLight border-r border-blkr-gold/20">
          <div className="p-4 border-b border-blkr-gold/20">
            <div className="text-xl font-playfair font-bold">
              <span className="text-blkr-offWhite">BLKR</span>
              <span className="text-blkr-gold">ADMIN</span>
            </div>
          </div>
          
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab("dashboard")}
                  className={`w-full flex items-center p-2 rounded-md ${
                    activeTab === "dashboard" 
                      ? "bg-blkr-gold/20 text-blkr-gold" 
                      : "text-blkr-offWhite/70 hover:bg-blkr-gold/10 hover:text-blkr-gold"
                  } transition-colors`}
                >
                  <Home size={18} className="mr-3" />
                  <span>Dashboard</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("contacts")}
                  className={`w-full flex items-center p-2 rounded-md ${
                    activeTab === "contacts" 
                      ? "bg-blkr-gold/20 text-blkr-gold" 
                      : "text-blkr-offWhite/70 hover:bg-blkr-gold/10 hover:text-blkr-gold"
                  } transition-colors`}
                >
                  <Mail size={18} className="mr-3" />
                  <span>Contact Messages</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("blog")}
                  className={`w-full flex items-center p-2 rounded-md ${
                    activeTab === "blog" 
                      ? "bg-blkr-gold/20 text-blkr-gold" 
                      : "text-blkr-offWhite/70 hover:bg-blkr-gold/10 hover:text-blkr-gold"
                  } transition-colors`}
                >
                  <FileText size={18} className="mr-3" />
                  <span>Blog Posts</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("users")}
                  className={`w-full flex items-center p-2 rounded-md ${
                    activeTab === "users" 
                      ? "bg-blkr-gold/20 text-blkr-gold" 
                      : "text-blkr-offWhite/70 hover:bg-blkr-gold/10 hover:text-blkr-gold"
                  } transition-colors`}
                >
                  <Users size={18} className="mr-3" />
                  <span>Users</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center p-2 rounded-md ${
                    activeTab === "settings" 
                      ? "bg-blkr-gold/20 text-blkr-gold" 
                      : "text-blkr-offWhite/70 hover:bg-blkr-gold/10 hover:text-blkr-gold"
                  } transition-colors`}
                >
                  <Settings size={18} className="mr-3" />
                  <span>Settings</span>
                </button>
              </li>
            </ul>
            
            <div className="mt-8 pt-4 border-t border-blkr-gold/20">
              <button
                className="w-full flex items-center p-2 rounded-md text-blkr-offWhite/70 hover:bg-red-500/10 hover:text-red-500 transition-colors"
              >
                <LogOut size={18} className="mr-3" />
                <span>Logout</span>
              </button>
            </div>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            {/* Content based on active tab */}
            {activeTab === "dashboard" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-blkr-blackLight p-6 rounded-lg border border-blkr-gold/20">
                    <h3 className="text-lg font-medium text-blkr-gold">Unread Messages</h3>
                    <p className="text-3xl font-bold">3</p>
                  </div>
                  <div className="bg-blkr-blackLight p-6 rounded-lg border border-blkr-gold/20">
                    <h3 className="text-lg font-medium text-blkr-gold">Blog Posts</h3>
                    <p className="text-3xl font-bold">12</p>
                  </div>
                  <div className="bg-blkr-blackLight p-6 rounded-lg border border-blkr-gold/20">
                    <h3 className="text-lg font-medium text-blkr-gold">Registered Users</h3>
                    <p className="text-3xl font-bold">245</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
                  <div className="bg-blkr-blackLight p-6 rounded-lg border border-blkr-gold/20">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4 pb-4 border-b border-blkr-gold/10">
                        <div className="bg-blkr-gold/20 rounded-full p-2">
                          <Mail size={16} className="text-blkr-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-blkr-offWhite/70">New contact message from <span className="text-blkr-gold">John Doe</span></p>
                          <p className="text-xs text-blkr-offWhite/50">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 pb-4 border-b border-blkr-gold/10">
                        <div className="bg-blkr-gold/20 rounded-full p-2">
                          <FileText size={16} className="text-blkr-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-blkr-offWhite/70">New blog post published: <span className="text-blkr-gold">Crypto Market Trends 2025</span></p>
                          <p className="text-xs text-blkr-offWhite/50">Yesterday</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-blkr-gold/20 rounded-full p-2">
                          <Users size={16} className="text-blkr-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-blkr-offWhite/70">New user registered: <span className="text-blkr-gold">Sarah Miller</span></p>
                          <p className="text-xs text-blkr-offWhite/50">2 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "contacts" && <AdminContacts />}
            {activeTab === "blog" && <AdminBlog />}
            
            {activeTab === "users" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Users Management</h1>
                <p className="text-blkr-offWhite/70">This section is under development.</p>
              </div>
            )}
            
            {activeTab === "settings" && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Settings</h1>
                <p className="text-blkr-offWhite/70">This section is under development.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
