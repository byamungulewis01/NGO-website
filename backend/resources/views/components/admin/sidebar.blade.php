<div class="app-menu navbar-menu">
    <!-- LOGO -->
    <div class="navbar-brand-box">
        <!-- Dark Logo-->
        <a href="{{ route('admin.dashboard') }}" class="logo logo-dark">
            <span class="logo-sm">
                <img src="logo/glorius.png" alt="" height="50">
            </span>
            <span class="logo-lg">
                <img src="logo/glorius.png" alt="" height="50">
            </span>
        </a>
        <!-- Light Logo-->
        <a href="{{ route('admin.dashboard') }}" class="logo logo-light">
            <span class="logo-sm">
                <img src="logo/glorius.png" alt="" height="50">
            </span>
            <span class="logo-lg">
                <img src="logo/glorius.png" alt="" height="50">
            </span>
        </a>
        <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover">
            <i class="ri-record-circle-line"></i>
        </button>
    </div>

    <div id="scrollbar">
        <div class="container-fluid">

            <div id="two-column-menu">
            </div>
            <ul class="navbar-nav" id="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link menu-link {{ Request::routeIs('admin.dashboard') ? 'active' : '' }}"
                        href="{{ route('admin.dashboard') }}">
                        <i class="ri-dashboard-2-line"></i> <span data-key="t-dashboards">Dashboards</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link menu-link {{ Request::routeIs('admin.employee.index') ? 'active' : '' }}"
                        href="{{ route('admin.employee.index') }}">
                        <i class="ri-account-circle-line"></i> <span data-key="t-employees">Employees</span>
                    </a>

                </li>

                {{-- posts --}}
                <li class="nav-item">
                    <a class="nav-link menu-link {{ Request::routeIs('admin.posts.index') ? 'active' : '' }}"
                        href="{{ route('admin.posts.index') }}">
                        <i class="ri-file-list-3-line"></i> <span data-key="t-posts">Posts</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link menu-link {{ Request::routeIs('admin.team.index') ? 'active' : '' }}"
                        href="{{ route('admin.team.index') }}">
                        <i class="ri-team-line"></i> <span data-key="t-team">Team</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link menu-link {{ Request::routeIs('admin.sponsor.index') ? 'active' : '' }}"
                        href="{{ route('admin.sponsor.index') }}">
                        <i class="ri-drag-drop-line"></i> <span data-key="t-sponsor">Sponsor</span>
                    </a>
                </li>

            </ul>
        </div>
        <!-- Sidebar -->
    </div>

    <div class="sidebar-background"></div>
</div>
